defmodule RollkeeperWeb.Components.Sidebar do
  use Phoenix.LiveComponent
  import RollkeeperWeb.CoreComponents

  @moduledoc """
  Collapsible sidebar component for the RollKeeper dashboard.

  Renders a narrow icon-only sidebar that expands on hover.

  ## Example
    <.live_component module={RollkeeperWeb.Components.Sidebar} id="sidebar">
      <:items>
        <.sidebar_item icon="hero-home" label="Dashboard" href="/" />
        <.sidebar_item icon="hero-user" label="Characters" href="/characters" />
      </:items>
    </.live_component>
  """

  slot :items

  def sidebar(assigns) do
    ~H"""
    <div class="group/sidebar flex h-full w-24 flex-col items-center justify-start gap-8 overflow-hidden bg-zinc-950 p-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:w-120">
      <button class="flex w-full cursor-pointer gap-4 rounded-2xl border-none">
        <.d20 class="w-16 rounded-2xl bg-white p-2 text-black shrink-0" />

        <div class="overflow-hidden max-w-0 opacity-0 translate-x-2 whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/sidebar:max-w-xs group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0">
          <div class="flex flex-col pr-2">
            <h1 class="text-4xl font-bold text-start text-white">RollKeeper</h1>
            <h3 class="font-medium text-white">A dashboard for any RPG session</h3>
          </div>
        </div>
      </button>

      <div class="flex flex-col w-full px-1">
        <div class="flex items-center justify-center group-hover/sidebar:justify-between">
          <h1 class="hidden text-white text-2xl font-bold group-hover/sidebar:block">
            Favorites
          </h1>
          <div class="w-14 h-14 flex items-center justify-center shrink-0">
            <img class="hero-star text-white w-6 h-6" />
          </div>
        </div>
        <hr class="group-hover/sidebar:block hidden h-px bg-white border-0 my-4" />

        <div class="flex w-full flex-col gap-4 p-2">
          {render_slot(@items)}
        </div>
      </div>
      <div class="flex flex-col w-full px-1 gap-1">
        <div class="flex items-center justify-center group-hover/sidebar:justify-between">
          <h1 class="hidden text-white text-2xl font-bold group-hover/sidebar:block">
            All Tools
          </h1>
          <div class="w-14 h-14 flex items-center justify-center shrink-0">
            <img class="hero-ellipsis-horizontal text-white w-6 h-6" />
          </div>
        </div>
        <hr class="hidden group-hover/sidebar:block h-px bg-white border-0 my-4" />
        <input class="hidden group-hover/sidebar:block border border-white rounded-md h-12 w-full text-white font-medium px-4" />
        <div class="hidden group-hover/sidebar:flex w-full flex-col gap-4 p-2">
          {render_slot(@items)}
        </div>
      </div>
    </div>
    """
  end
end
