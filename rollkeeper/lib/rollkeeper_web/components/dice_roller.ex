defmodule RollkeeperWeb.Components.DiceRoller do
  use Phoenix.LiveComponent
  import RollkeeperWeb.CoreComponents
  import RollkeeperWeb.Components.Button

  def mount(socket) do
    {:ok, assign(socket, result: nil, history: [])}
  end

  def handle_event("roll_dice", %{"max" => max}, socket) do
    result = Enum.random(1..String.to_integer(max))
    history = [result | socket.assigns.history]
    {:noreply, assign(socket, result: result, history: history)}
  end

  def dice_roller(assigns) do
    ~H"""
    <.live_component module={RollkeeperWeb.Components.DiceRoller} id={@id} />
    """
  end

  def render(assigns) do
    ~H"""
    <div class="flex flex-col border border-black rounded-2xl gap-2 w-64 p-2">
      <div class="flex p-2 bg-black/2 rounded-2xl h-16 text-2xl font-bold items-center justify-center">
        <p><%= @result || "?" %></p>
      </div>
      <div class="flex flex-col bg-black rounded-md w-full h-fit">
        <h1 class="flex text-md text-white font-medium items-center justify-center  ">History</h1>
        <div class="p-1  text-white">
          <p class="font-medium"><%= Enum.join(@history, " ") %></p>

        </div>


      </div>
      <div class="grid grid-cols-3 gap-2">
        <.button phx-click="roll_dice" phx-value-max="3" phx-target={@myself}>d3</.button>
        <.button phx-click="roll_dice" phx-value-max="4" phx-target={@myself}>d4</.button>
        <.button phx-click="roll_dice" phx-value-max="6" phx-target={@myself}>d6</.button>
        <.button phx-click="roll_dice" phx-value-max="8" phx-target={@myself}>d8</.button>
        <.button phx-click="roll_dice" phx-value-max="12" phx-target={@myself}>d12</.button>
        <.button phx-click="roll_dice" phx-value-max="20" phx-target={@myself}>d20</.button>
      </div>
    </div>
    """
  end
end
