defmodule RollkeeperWeb.Components.Sidebar do
  use Phoenix.LiveComponent

  def sidebar(assigns) do
    ~H"""
      <div class="flex flex-col justify-start bg-black duration-300 h-full w-20 items-center hover:w-96 p-2 gap-8">
        <button class="flex gap-4 border-none rounded-2xl duration-100 cursor-pointer w-full ">
          <img class="bg-white p-2 rounded-2xl text-white h-16 w-16" src="./images/d20.svg">
        </button>
        <div class="flex flex-col p-2 gap-4">
          <button class="border border-white bg-black rounded-2xl w-16 h-16">
          </button>

        </div>
      </div>
    """
  end

end
