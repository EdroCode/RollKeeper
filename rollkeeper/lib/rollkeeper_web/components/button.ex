defmodule RollkeeperWeb.Components.Button do
  @moduledoc """
  Button Component.
  """
  use Phoenix.Component

  attr :text, :string, default: "", doc: "Button text"

  attr :link, :string, default: nil, doc: "Link URL"
  attr :rest, :global, doc: "Additional attributes for the button"

  def primary_button(assigns) do
    ~H"""
    <a href={@link}>
      {button_content(assigns)}
    </a>
    """
  end

  defp button_content(assigns) do
    ~H"""
    <button
      class={[
        "flex w-full h-full items-center justify-center gap-2 font-bold
         cursor-pointer hover:scale-110 transition-all duration-300 hover:text-white hover:bg-black",
        @rest[:class]
      ]}
      {@rest}
    >
      <p>{@text}</p>
    </button>
    """
  end
end
