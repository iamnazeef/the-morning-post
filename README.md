# The Morning Post
A React.js based news app.

### Tech Stack

#### Package Manager
- NPM

#### UI Library
- React.js

#### Language
- TypeScript

#### State Management
- Context API
> Avoided Redux.js because the project is small and minimal.

#### Data fetching
- Axios
> Avoided fetch because Axios has better browser support.

#### API
- Gnews API
- OpenWeatherMap API

#### Styling
- Tailwind CSS

#### Build Tool
- Vite

### Features
- Search topics
- Sort by newest and oldest news
- Get news based on language
> Tested for: English, Malayalam
- Infinite Scroll
> Implemented feature, but new data will be duplicate of existing data since the pagination feature on API is paid.
