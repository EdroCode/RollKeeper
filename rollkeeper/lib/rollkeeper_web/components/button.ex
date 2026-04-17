defmodule RollkeeperWeb.Components.Button do
  @moduledoc """
  Button Component.
  """
  use Phoenix.Component
  import RollkeeperWeb.CoreComponents

  attr :text, :string, doc: "Button text"

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
        "flex w-full h-full items-center justify-center gap-2 px-4 py-2 rounded-2xl
         cursor-pointer hover:scale-95 transition-all duration-300",
        @rest[:class]
      ]}
      {@rest}
    >
      <%= if @icon && @iconpos == :left do %>
        <.icon name={@icon} />
      <% end %>
      <p>{@text}</p>
      <%= if @icon && @iconpos == :right do %>
        <.icon name={@icon} />
      <% end %>
    </button>
    """
  end

end
