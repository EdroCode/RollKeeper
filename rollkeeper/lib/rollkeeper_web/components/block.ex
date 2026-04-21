defmodule RollkeeperWeb.Components.Block do
  use Phoenix.LiveComponent

  @moduledoc """
  A clickable sidebar block item with an icon and an label.

  ## Example

    <.live_component module={RollkeeperWeb.Components.Block} id="block-dashboard"
      title="Dashboard"
      class="hero-home"
    />
  """

  attr :title, :string, default: "Title"
  attr :class, :string, default: ""

  def block(assigns) do
    ~H"""
    <button class="group flex items-center gap-3 w-full px-2 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white">
      <img class={"#{@class} h-10 w-10 text-white group-hover:text-black rounded-xl shrink-0"} />
      <div class="overflow-hidden max-w-0 group-hover/sidebar:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
        <h1 class="text-white text-lg font-medium group-hover:text-black pr-2">{@title}</h1>
      </div>
    </button>
    """
  end
end
