# Audio Player Project

This project is a beginner-friendly introduction to building an audio player using Rust and Next.js. The goal is to create a simple web-based audio player that allows users to play, pause, and skip audio tracks.

## Technologies Used

- **Rust**: A systems programming language that will be used for the backend logic.
- **Next.js**: A React framework that will be used for the frontend interface.

## Features

- Play audio tracks
- Pause audio tracks
- Control volume of track
- Display basic information about track being played

## Getting Started

### Prerequisites

- Install [Rust](https://www.rust-lang.org/tools/install)
- Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/audio-player.git
    ```
2. Navigate to the project directory:
    ```sh
    cd audio-player
    ```
3. Install the dependencies for the Next.js frontend:
    ```sh
    cd frontend
    npm install
    ```
4. Build the Rust backend:
    ```sh
    cd ../backend
    cargo build
    ```

### Running the Project

1. Start the Rust backend:
    ```sh
    cd backend
    cargo run
    ```
2. Start the Next.js frontend:
    ```sh
    cd ../frontend
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the audio player in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.