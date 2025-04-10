# Yang Li's GitHub Pages Website

This repository contains the source code for my personal website hosted on GitHub Pages at [yangli-leo.github.io](https://yangli-leo.github.io).

## Features

- Clean, Apple-inspired design
- Responsive layout for all device sizes
- Blog section with individual post pages
- Smooth animations and transitions
- Mobile-friendly navigation

## Structure

```
yangli-leo.github.io/
├── index.html                  # Homepage
├── blog/                       # Blog directory
│   ├── index.html              # Blog listing page
│   └── google-maps-mcp-trip.html  # Sample blog post
├── assets/                     # Assets directory
│   ├── css/                    # CSS files
│   │   ├── main.css            # Main stylesheet
│   │   └── blog.css            # Blog-specific styles
│   ├── js/                     # JavaScript files
│   │   └── main.js             # Main JavaScript file
│   └── images/                 # Image files
│       └── favicon.ico         # Favicon
├── favicon-generator.html      # Tool to generate a favicon
└── README.md                   # This file
```

## Setup for GitHub Pages

1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)
2. Clone this repository to your local machine
3. Push the code to your GitHub repository
4. Go to the repository settings on GitHub
5. Navigate to the "Pages" section
6. Ensure the source is set to deploy from the main branch
7. Your site will be published at `https://username.github.io`

## Local Development

To run the site locally:

1. Clone the repository
2. Open the project folder
3. Open `index.html` in your browser

Since this is a static site, no build process is required.

## Customization

### Changing Colors

The color scheme can be modified by editing the CSS variables in `assets/css/main.css`:

```css
:root {
  --color-background: #ffffff;
  --color-text-primary: #1d1d1f;
  --color-text-secondary: #86868b;
  --color-accent: #0066cc;
  /* ... other variables ... */
}
```

### Adding Blog Posts

To add a new blog post:

1. Create a new HTML file in the `blog/` directory
2. Use the existing blog post as a template
3. Update the blog listing page (`blog/index.html`) to include the new post

### Creating a Favicon

A favicon generator tool is included in this repository:

1. Open `favicon-generator.html` in your browser
2. Customize the colors and text
3. Download the generated favicon
4. Place it in the `assets/images/` directory

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: [liyangauthority@gmail.com](mailto:liyangauthority@gmail.com)
- GitHub: [YangLi-leo](https://github.com/YangLi-leo)
- Twitter: [YangLi_leo](https://x.com/YangLi_leo)
