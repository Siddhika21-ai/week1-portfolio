# Responsive Personal Portfolio Website

A professional, fully responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript. This project showcases modern web development skills with a focus on accessibility, performance, and user experience.

## 🚀 Project Overview

This portfolio website is designed to showcase your skills, projects, and professional information in an elegant and modern interface. It features smooth animations, responsive design, and follows best practices for web development.

## ✨ Features

### 🎨 Design & UI/UX
- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: CSS transitions and JavaScript-powered scroll animations
- **Interactive Elements**: Hover effects, micro-interactions, and dynamic content
- **Dark Mode Support**: CSS variables ready for dark theme implementation

### 🛠️ Technical Features
- **Semantic HTML5**: Proper use of header, nav, main, section, footer elements
- **CSS Variables**: Consistent theming and easy customization
- **Responsive Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Client-side validation with real-time feedback
- **Accessibility**: ARIA labels, semantic markup, keyboard navigation
- **Performance**: Optimized animations, lazy loading ready

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Skills Section**: Technical skills with animated progress bars
4. **Projects Section**: Project showcase with filtering capabilities
5. **Contact Section**: Contact form with validation
6. **Footer**: Social links and additional information

## 🏗️ Project Structure

```
week1-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── style.css          # Main styles
│   └── responsive.css     # Media queries and responsive styles
├── js/
│   ├── navigation.js      # Mobile menu and navigation functionality
│   └── form-validation.js # Contact form validation
├── images/
│   ├── profile.jpg        # Profile picture
│   ├── about.jpg          # About section image
│   ├── project1.jpg       # Project 1 thumbnail
│   ├── project2.jpg       # Project 2 thumbnail
│   ├── project3.jpg       # Project 3 thumbnail
│   └── icons/             # Social media icons
├── README.md              # Project documentation
└── .gitignore             # Git ignore file
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (ES6+)**: Interactive functionality and form validation
- **Google Fonts**: Inter and Space Mono fonts

### Tools & Concepts
- **Responsive Design**: Mobile-first approach
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Variables**: Custom properties for theming
- **Accessibility**: ARIA labels and semantic HTML
- **Form Validation**: Client-side validation patterns
- **Performance**: Optimized animations and efficient code

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Local web server (optional, for development)

### Installation
1. Clone or download the project
2. Navigate to the project directory
3. Open `index.html` in your browser

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd week1-portfolio

# Open in browser (or use a local server)
open index.html
```

### Development Setup
For development with live reload, you can use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- Your name in the title, hero section, and footer
- Contact information (email, phone, location)
- Social media links
- Personal description and bio

### Colors & Theme
Modify CSS variables in `css/variables.css`:
```css
:root {
  --primary-color: #667eea;    /* Primary brand color */
  --secondary-color: #48bb78;  /* Secondary accent color */
  --text-primary: #2d3748;     /* Main text color */
  /* ... other variables */
}
```

### Fonts
Change fonts in the HTML head section:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Family&display=swap" rel="stylesheet">
```

And update in `css/variables.css`:
```css
:root {
  --font-family-primary: 'Your Font Family', sans-serif;
}
```

### Projects
Update project information in the projects section:
- Project titles and descriptions
- Technology tags
- Image sources
- Live demo and repository links

## 📱 Responsive Breakpoints

The website uses the following breakpoints:
- **Mobile**: 320px - 479px
- **Mobile Large**: 480px - 639px
- **Tablet Portrait**: 640px - 767px
- **Tablet Landscape**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader friendly navigation and form elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Clear visual indicators for focused elements
- **Color Contrast**: WCAG compliant color combinations
- **Alt Text**: Descriptive alt text for all images
- **Form Labels**: Properly associated form labels

## 🎯 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🚀 Performance Optimization

- **Minified CSS**: Optimized stylesheet delivery
- **Efficient JavaScript**: Event delegation and throttling
- **Optimized Images**: Properly sized and compressed images
- **CSS Animations**: Hardware-accelerated transforms
- **Lazy Loading Ready**: Structure supports image lazy loading

## 🔧 Future Enhancements

- [ ] Dark mode toggle
- [ ] Project filtering system
- [ ] Blog section
- [ ] Testimonials section
- [ ] Loading animations
- [ ] Contact form backend integration
- [ ] SEO optimization
- [ ] Progressive Web App (PWA) features

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues) if you want to contribute.

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: https://github.com/yourusername
- **LinkedIn**: https://linkedin.com/in/yourprofile

---

**Built with ❤️ for Week 1 of the Internship Program**
