-- Shared checklist board state (single row, id = 'default')
create table if not exists public.checklist_state (
  id text primary key,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.checklist_state enable row level security;

-- Shared, public board: anyone with the anon key can read/write.
do $$
begin
  if not exists (select 1 from pg_policy where polrelid = 'public.checklist_state'::regclass and polname = 'checklist read') then
    create policy "checklist read" on public.checklist_state for select using (true);
  end if;
  if not exists (select 1 from pg_policy where polrelid = 'public.checklist_state'::regclass and polname = 'checklist insert') then
    create policy "checklist insert" on public.checklist_state for insert with check (true);
  end if;
  if not exists (select 1 from pg_policy where polrelid = 'public.checklist_state'::regclass and polname = 'checklist update') then
    create policy "checklist update" on public.checklist_state for update using (true);
  end if;
end $$;

-- Broadcast changes to subscribed clients in realtime.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'checklist_state'
  ) then
    alter publication supabase_realtime add table public.checklist_state;
  end if;
end $$;
