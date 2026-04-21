defmodule Rollkeeper.Repo do
  use Ecto.Repo,
    otp_app: :rollkeeper,
    adapter: Ecto.Adapters.Postgres
end
