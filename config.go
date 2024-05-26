package webview

type Config struct {
	Title string
	Width int
}

func NewConfig() *Config {
	return &Config{}
}

func (c *Config) SetTitle(title string) *Config {
	c.Title = title
	return c
}
