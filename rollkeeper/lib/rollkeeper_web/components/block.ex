defmodule RollkeeperWeb.Components.Block do
  use Phoenix.LiveComponent

  attr :title, :string, default: "Title"
  attr :class, :string, default: ""

  def block(assigns) do
    ~H"""
    <button class="border border-white flex gap-4 border-none rounded-2xl duration-300 cursor-pointer w-full ">
      <img class={"#{@class} p-2 rounded-2xl text-white h-16 w-16"} />
      <div class="hidden group-hover:flex">
        <h1 class="text-white text-2xl">{@title}</h1>
      </div>
    </button>
    """
  end
end
