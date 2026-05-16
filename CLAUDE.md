# CLAUDE.md

## Project Overview

Build a premium interactive web application:

Ultra-transparent Liquid Glass Periodic Table of Elements.

The final result should feel like a futuristic Apple-designed scientific interface.

---

## Core Goal

Create a highly polished educational visualization platform that combines:

- complete periodic table
- elegant UI
- 3D atomic visualization
- orbital structure viewer
- multilingual support
- advanced interaction
- Apple-level visual refinement

---

## Technical Requirements

Use only:

- HTML
- CSS
- JavaScript
- Three.js

Prefer project structure:

- index.html
- style.css
- app.js
- orbitals.js
- elements.json

Avoid:

- React
- Vue
- build tools
- npm dependencies
- server frameworks

---

## Mandatory Features

Must include:

### Periodic Table

- all 118 elements
- standard layout
- correct positioning
- lanthanides
- actinides

Each element must display:

- atomic number
- symbol
- atomic mass
- category
- year discovered

---

## Additional Features

Must support:

### Theme Toggle

Provide:

- light mode
- dark mode

Default:
light mode

### Light Mode

Style:

- white background
- bright translucent cards
- soft blue glow
- pure glass appearance
- airy scientific UI

### Dark Mode

Style:

- dark navy background
- transparent black glass
- subtle cyan glow
- elegant low-light lab style

Theme switching must animate smoothly.

---

## Language Toggle

Provide language switch:

- English
- Chinese

Dynamic switching required for:

- element names
- categories
- descriptions
- detail labels

Examples:

English:
Hydrogen

Chinese:
氢

---

## Search Features

Top toolbar must include:

- search input
- category filter
- language switch
- light/dark switch
- atom/orbital switch

---

## 3D Visualization

Use Three.js.

Must include:

### Atom View

Render:

- nucleus
- electron rings
- electrons
- auto rotation
- mouse drag
- zoom

### Orbital View

Render:

- s orbital
- p orbital
- d orbital
- f orbital

Orbital model should include:

- transparent orbital clouds
- scientific shapes
- smooth animation
- glass material
- floating visualization

User can switch:

- Atom View
- Orbital View

---

## Design Language

Visual style inspired by:

- Apple visionOS
- Apple Liquid Glass
- futuristic scientific dashboard
- premium educational interface

Must feel:

- bright
- clean
- weightless
- elegant
- highly polished

---

## Glass Rendering Requirements

The liquid glass effect must prioritize optical transparency.

Avoid generic glassmorphism.

Required appearance:

- ultra-clear optical glass
- floating sapphire sheets
- almost invisible material
- very thin glass
- highly transmissive
- subtle refraction
- bright white futuristic lab interface

---

## Glass Material Parameters

Required:

- transparency >= 96%
- minimal blur
- low opacity overlays
- subtle reflections
- edge highlights
- almost invisible borders
- soft internal glow
- no gray fog effect
- no thick frosted panels
- no heavy shadows

Avoid:

- opaque cards
- cloudy blur
- milky glass
- generic frosted glass UI

---

## CSS Style Guidance

Prefer implementation like:

- rgba(255,255,255,0.08~0.16)
- backdrop-filter blur(6px~10px)
- saturate(180%~220%)
- subtle linear gradients
- ::before reflective overlay
- ::after light streak layer
- soft specular highlights
- bright glass edges

Do not use:

- strong blur > 20px
- opacity > 0.25
- thick borders
- dark overlays

---

## Motion Design

Must include:

- floating cards
- ambient motion
- hover transitions
- smooth easing
- depth parallax
- animated gradients
- subtle particle background

Animation style:

- elegant
- soft
- fluid
- Apple-quality

---

## UI Interaction

Hover:

- card lifts upward
- transparency increases
- glow intensifies
- refraction changes
- scale slightly

Click:

- open detail panel
- animate expansion
- show data
- render 3D viewer

---

## Detail Panel

Display:

- name
- symbol
- atomic number
- atomic mass
- category
- discovery year
- electron configuration
- shell structure
- description

---

## Data Requirements

All 118 elements required.

Each must contain:

- atomic number
- symbol
- English name
- Chinese name
- atomic mass
- category
- year discovered
- electron configuration
- shells
- description

Never omit any entries.

Never truncate.

Never use placeholders.

---

## Coding Standards

Code must be:

- modular
- readable
- commented
- maintainable
- optimized
- responsive

Separate logic:

1. data
2. UI rendering
3. interactions
4. theme system
5. language system
6. 3D rendering
7. orbital visualization

---

## Workflow

When implementing:

1. create file structure
2. create full dataset
3. render periodic table
4. build white UI
5. add dark mode
6. add language switch
7. add detail panel
8. add atom viewer
9. add orbital viewer
10. polish visuals

Do not skip steps.

---

## Output Rules

Always:

- generate working code
- preserve existing features
- never delete completed features
- extend incrementally
- finish full implementation

Never:

- simplify
- reduce dataset
- output pseudo-code
- stop midway
- ask for continuation

Always complete the task.