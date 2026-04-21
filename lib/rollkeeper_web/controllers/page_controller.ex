defmodule RollkeeperWeb.PageController do
  use RollkeeperWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
