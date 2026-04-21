defmodule RollkeeperWeb.Components.Clock do
  use Phoenix.LiveComponent
  import RollkeeperWeb.Components.Button

  def mount(socket) do
    {:ok, assign(socket, result: nil, history: [])}
  end

  def clock(assigns) do
    ~H"""
    <.live_component module={RollkeeperWeb.Components.Clock} id={@id} />
    """
  end

  def render(assigns) do
    ~H"""
    <div class="w-120 h-fit rounded-3xl bg-zinc-950 text-white hover:shadow-md border border-zinc-800 overflow-hidden">
      <div class="px-6 pt-6 pb-5 border-b border-zinc-800  from-zinc-900 to-zinc-950">
        <div class="flex justify-between">
          <p class="text-[11px] uppercase tracking-[0.25em] text-zinc-200 mb-3 font-extrabold">
            Clock
          </p>
          <a>
            <img class="hero-trash font-bold cursor-pointer hover:scale-110 duration-150" />
          </a>
        </div>

        <div class="flex">
          <p class="w-full text-7xl text-center font-black leading-none tracking-tight">
            {@result || "00:00"}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 p-5 ">
        <.primary_button text="Start" />
        <.primary_button text="Reset" />
      </div>
    </div>
    """
  end
end
