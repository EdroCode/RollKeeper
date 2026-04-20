defmodule RollkeeperWeb.Components.Card do
  use Phoenix.LiveComponent

  attr :src, :string, default: nil, doc: "The URL of the image to display."
  attr :title, :string, default: "Title", doc: "Title of card"
  attr :description, :string, default: "Description", doc: "Description of card"

  @spec card(map()) :: Phoenix.LiveView.Rendered.t()
  def card(assigns) do
    ~H"""
    <div class="flex flex-col items-center p-2 border border-dashed border-white rounded-2xl min-h-32 min-w-32 ">
      <img src={@src} />
      <h1 class="text-2xl text-white font-bold">
        {@title}
      </h1>
      <p class="text-white">{@description}</p>
    </div>
    """
  end
end
