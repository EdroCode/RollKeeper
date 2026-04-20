defmodule RollkeeperWeb.Components.DiceRoller do
  use Phoenix.LiveComponent
  import RollkeeperWeb.Components.Button

  def mount(socket) do
    {:ok, assign(socket, result: nil, history: [])}
  end

  def handle_event("roll_dice", %{"max" => max}, socket) do
    result = Enum.random(1..String.to_integer(max))
    history = [result | socket.assigns.history]
    {:noreply, assign(socket, result: result, history: history)}
  end

  def handle_event("clean_history", socket) do
    {:noreply, assign(socket, result: "?", history: "")}
  end

  def dice_roller(assigns) do
    ~H"""
    <.live_component module={RollkeeperWeb.Components.DiceRoller} id={@id} />
    """
  end

  def render(assigns) do
    ~H"""
    <div class="w-72 rounded-3xl bg-zinc-950 text-white hover:shadow-md border border-zinc-800 overflow-hidden">
      <div class="px-6 pt-6 pb-5 border-b border-zinc-800  from-zinc-900 to-zinc-950">
        <div class="flex justify-between">
          <p class="text-[11px] uppercase tracking-[0.25em] text-zinc-200 mb-3 font-extrabold">
            Dice Result
          </p>
          <a>
            <img class="hero-trash font-bold cursor-pointer hover:scale-110 duration-150" />
          </a>
        </div>

        <div class="flex items-end justify-between">
          <p class="text-7xl font-black leading-none tracking-tight">
            {@result || "?"}
          </p>
        </div>
      </div>

      <div class="px-6 py-4 border-b border-zinc-800">
        <div class="flex justify-between">
          <p class="text-[11px] uppercase tracking-[0.25em] text-zinc-100 mb-2 font-medium">
            History
          </p>
          <button
            phx-click="clean_history"
            class="hero-x-mark w-4  text-white cursor-pointer hover:scale-110 duration-150"
          >
          </button>
        </div>

        <div class="flex min-h-6 text-sm text-zinc-200 flex-wrap gap-2">
          <%= if @history == [] do %>
            <span class="text-zinc-500">No rolls yet</span>
          <% else %>
            <%= for item <- @history do %>
              <span class="px-2 py-1 rounded-lg text-white font-medium text-xs">
                {item}
              </span>
            <% end %>
          <% end %>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-3 p-5 ">
        <.primary_button phx-click="roll_dice" phx-value-max="3" phx-target={@myself} text="d3" />
        <.primary_button phx-click="roll_dice" phx-value-max="4" phx-target={@myself} text="d4" />
        <.primary_button phx-click="roll_dice" phx-value-max="6" phx-target={@myself} text="d6" />
        <.primary_button phx-click="roll_dice" phx-value-max="8" phx-target={@myself} text="d8" />
        <.primary_button phx-click="roll_dice" phx-value-max="12" phx-target={@myself} text="d12" />
        <.primary_button phx-click="roll_dice" phx-value-max="20" phx-target={@myself} text="d20" />
      </div>
    </div>
    """
  end
end
