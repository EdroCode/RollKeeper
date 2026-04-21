defmodule Rollkeeper.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      RollkeeperWeb.Telemetry,
      Rollkeeper.Repo,
      {DNSCluster, query: Application.get_env(:rollkeeper, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Rollkeeper.PubSub},
      # Start a worker by calling: Rollkeeper.Worker.start_link(arg)
      # {Rollkeeper.Worker, arg},
      # Start to serve requests, typically the last entry
      RollkeeperWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Rollkeeper.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    RollkeeperWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
