defmodule RollkeeperWeb.Components do
  defmacro __using__(_) do
    quote do
      import RollkeeperWeb.CoreComponents
      import RollkeeperWeb.Components.Button
      import RollkeeperWeb.Components.DiceRoller
      import RollkeeperWeb.Components.Navbar
      import RollkeeperWeb.Components.Card
      import RollkeeperWeb.Components.Sidebar

    end
  end
end
