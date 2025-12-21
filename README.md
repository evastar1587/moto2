# Moto² — Portland Motorcycle & Moped Community

> **Right to Repair**: Peer-to-peer platform for Portland's moped and motorcycle community

## 🏍️ Overview

Moto² is a community-driven platform connecting Portland riders, mechanics, and enthusiasts. Share tools, find workspace, exchange knowledge, and build your local repair network.

## 🎨 Design System

**Moto² Design Philosophy**: Performance meets accessibility. Bold confidence with warm approachability.

### Color Palette

- **Moto Red (#D40000)** — Action, urgency, identity (40% usage)
- **Matte Black (#1A1A1A)** — Structure, sophistication (30% usage)  
- **Cream (#F5F1E8)** — Warmth, community, vintage (20% usage)
- **Silver (#B8B8B8)** — Metallic accents
- **Status Colors**: Success (#4CAF50), Warning (#FFC107), Error (#D40000)

### Typography

- **Display Font**: Bebas Neue, Oswald (headers, emphasis)
- **Body Font**: Inter, Roboto (content, UI)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/evastar1587/moto2.git
cd moto2

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
moto2/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Skeleton.jsx
│   │   ├── inventory/       # Tool sharing components
│   │   │   ├── ToolCard.jsx
│   │   │   └── ToolRequestModal.jsx
│   │   └── layout/          # Layout components
│   │       └── Header.jsx
│   ├── pages/               # Main application pages
│   │   ├── FeedPage.jsx
│   │   ├── PeoplePage.jsx
│   │   ├── InventoryPage.jsx
│   │   └── GuidesPage.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useTools.js
│   ├── data/                # Mock data
│   │   └── tools.js
│   ├── utils/               # Utility functions
│   │   └── analytics.js
│   ├── styles/
│   │   └── globals.css
│   ├── config.js            # Environment configuration
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── index.html
├── tailwind.config.js       # Tailwind + Moto² design system
├── vite.config.js
├── package.json
└── .env.example             # Environment variables template
```

## 🔧 Features

### ✅ Implemented

- **Feed**: Community updates and discussions (coming soon)
- **People**: Connect with local riders and mechanics (coming soon)
- **Inventory**: Browse and request tools and workspace
  - Filter by type (tools/spaces), distance, and price
  - Request borrowing with date selection
  - Free and paid options
- **Guides**: Repair guides and tutorials (coming soon)
- **Design System**: Complete Moto² color palette and typography
- **Error Handling**: Global error boundary
- **State Persistence**: Active tab saved to localStorage
- **Responsive Design**: Mobile-first (375px, 768px, 1024px+)
- **Accessibility**: Keyboard navigation, ARIA labels, screen reader support

### 🚧 Coming Soon

- User authentication
- Real-time messaging
- Community feed with posts and comments
- User profiles and ratings
- Interactive repair guides
- Map view for tool locations

## 🎯 Core Pages

### 1. Feed
Community updates, questions, and project shares.

### 2. People
Directory of riders, mechanics, and tool owners in Portland.

### 3. Inventory (Tools)
Share and borrow specialty tools and garage space:
- Torque wrenches, carb sync tools, multimeters
- Garage bays and workshop access
- Filter by distance, type, and availability
- Free and paid options with deposit protection

### 4. Guides
Step-by-step repair and maintenance guides for common tasks.

## 🛠️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Feature Flags
VITE_ENABLE_AUTH=false
VITE_ENABLE_MESSAGING=false

# External Services
VITE_MOPED_DIVISION_AFFILIATE_ID=
VITE_MAPBOX_TOKEN=
```

## 🧪 Development

### Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

### Adding Components

All components follow the Moto² design system:

```jsx
// Example component with Moto² styling
<div className="bg-moto-charcoal border-l-4 border-moto-red">
  <h2 className="text-moto-red font-bold uppercase">Title</h2>
  <p className="text-zinc-300">Content</p>
</div>
```

### Custom Hooks

Located in `src/hooks/`:
- `useTools.js` — Fetch and manage tool inventory

### Adding Pages

1. Create page component in `src/pages/`
2. Import in `src/App.jsx`
3. Add to tab navigation in `Header.jsx`

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Follow the Moto² design system
4. Test on mobile and desktop
5. Submit a pull request

### Design Guidelines

- Use Moto² color palette consistently
- Include "RIGHT TO REPAIR" messaging where appropriate
- Maintain mobile-first responsive design
- Ensure keyboard accessibility
- Follow existing component patterns

## 📜 License

MIT License - See LICENSE file for details

## 💬 Community

- **Location**: Portland, Oregon
- **Mission**: Right to Repair — You own it, you can fix it
- **Values**: Knowledge sharing, community support, DIY culture

---

**Built with**: React 18, Vite, Tailwind CSS, Lucide React Icons

**For Portland riders, by Portland riders. 🏍️**
