FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

COPY . .

# Build the application using pnpm
RUN pnpm run build

# Start the application using pnpm
CMD ["pnpm", "run", "start:prod"]