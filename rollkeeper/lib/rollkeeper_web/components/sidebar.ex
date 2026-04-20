defmodule RollkeeperWeb.Components.Sidebar do
  use Phoenix.LiveComponent
  import RollkeeperWeb.Components.Block

  def sidebar(assigns) do
    ~H"""
    <div class="flex flex-col group justify-start bg-zinc-950 duration-300 h-full w-20 items-center hover:w-96 p-2 gap-8">
      <button class="flex gap-4 border-none rounded-2xl duration-100 cursor-pointer w-full ">
        <img class="bg-white p-2 rounded-2xl text-white h-16 w-16" src="./images/d20.svg" />
        <div class="hidden group-hover:flex group-hover:flex-col">
          <h1 class="text-4xl text-white font-bold ">RollKeeper</h1>
          <h3 class="text-white font-medium">A dashboard for any RPG session</h3>
        </div>
      </button>
      <div class="flex flex-col p-2 gap-4">
        <.block class="hero-cake" title="DiceRoller" />
        <.block class="hero-cake" />
        <.block class="hero-cake" />
      </div>
    </div>
    """
  end
end
