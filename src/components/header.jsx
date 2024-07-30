function Header() {
  return (
    <div className="h-12 bg-blue-400 flex justify-between items-center">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAASFBMVEX///9JpteXyOY/otaRxeQxntREpNa82+5Tqtn7/f73+/03oNR8u+De7vfH4fGkz+mDv+Lw9/tgsNvR5vOx1uxvtt7l8fgimtKj40VZAAAD6UlEQVR4nO2b65arIAyFq5R4war11vd/09N2ADWBTrFiz6yV/Wtm6ZSvEXYSZE4nFovFYrFYLBaLxWKx3tHl8m0CrGsrpVTp9fCBy3P1o4ZcmjqV3KW6w6NVSfjRrUZXLgqSp0D2B0PleuREpOsLfWKu3LEwcGTZkRFULZNZILNDoRI31CAgWVKJ4VAo5+NrVIKk6EKIJ+ecSgVmulOdvwpVtCROT6q2+B5U6Wa6U1Xlt6Cuo4fpYaPTd6CmzjGfjMRBVAjqkr9gut+UH5Jy1lB9DmsKwL8nR5j7CqoXiEF05GmqA6iWUBmOi+iKAlMBxDf3GaqpFWJ6ekBZodUIMjrVPInyBMep+rmF+JZKX3/mjlBY8qwdvEglvpTGNXcvlFhk4AYvADVGpfJAwW01cbIbfoJRU44bCkytWeqxa7Iwk4j9hBtKGjMaR/1DLbGNRkw5LigwyWQalU13JAGBipZyHFAi0aOVD+MU+dVHBbG6HAqlRk2h+xk7NilqovUTBEp1JjLGTMFEjlLF6ScawlRpB6oXbZ/SEaGFsozQT6Qkg7TWA1bTTFPRUhn3sB+rOHuz2oAcwEakIVl7536CZlo7NM4r86WBpJxqRyo6bZWetjQDP2JlIpKRSnDczdxp16K8E+dnbJPualKM7mXu1ApN9U2qOju2iUhNKq99+gnaIcxm5O1nhLGwCVNBvoO5k8rXftfXfV8+ee4C8TFVhtfWIsF5K9FVPEvCDh+mnAyXIbZk6/FzIVS20GrRCv2wn6DFre4Q6LpyUJk1emrJItxu7o42wOtATpkkXJzJB5031sgFWfDC7IaRDOKRTTlkb02Nm6ioMdoOgSRnr+ym3nDzTc6gONEm3FQlJDm/orK1BLHRLjwR4g1WsB1C9fscX1KZfqInCzl4tl/QZ0Piq3R/06KfwOYemnHq9Xqx1XfZBTIt7RbWMQ6u24fV2P5v+45slFHKUaEemi0jZQuOKQmaTzOVSeGrOAdDXRaj2zL2DRv3UDnNXYTOqWK0z8n6XL+V6QFASzAI98+rSSSz/+E1HaTZ3DUVqA1FaA0CAIRs9LMb3kwtPs2thnx+8LY3g0XTVlWqn3uR4n2n8FgZc5/SqmqbrbtWRWn/cgi2pxexOpXlLr2W6xVaqMTer9x2gdr7jRtDHQr1X84phmIohmIohmIohmKoL0OBIPIeFTgKCqqUqPJQHQalHNs5vi2Hr0JlDMVQDMVQDMVQDMVQDPU3oJo9oPY+auZ74+CE8t2796m8a+d8hwWu0/m1s58Be9hxR6omlw65TmKUZ9edeRPpsO7mzfnD/uOIxWKxWCwWi8VisVh/QP8AsMs2zD+8AHAAAAAASUVORK5CYII="
        alt="logo"
        className="h-10 p-1"
      />

      <div>
        <a href="/contact" className="mr-6">
          Contact
        </a>
        <a href="/about" className="mr-4">
          About
        </a>
      </div>
    </div>
  );
}

export default Header;
