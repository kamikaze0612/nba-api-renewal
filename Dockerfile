FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if you have one)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 8080

# Build the application using pnpm
RUN pnpm run build

# Generate Prisma client
RUN pnpm dlx prisma generate

# Start the application using pnpm
CMD ["pnpm", "run", "start:prod"]