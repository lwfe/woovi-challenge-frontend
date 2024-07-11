# Woovi Frontend Challenge

Hello Filipe, I'm one of the applicants for the position "Frontend Software Engineer - Junior". Here's the requested code challenge!

Before you continue, I'd like to share with you that I deployed this challenge at [Vercel - Live Link](https://woovi-challenge-frontend.vercel.app/). So if you want to check it out in a production build, it's already there :)


## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The available routes are:
- `/payment`
  ![image](https://github.com/lwfe/woovi-challenge-frontend/assets/60831308/41acabe8-c41f-4edd-8ff3-e95132578621)

- `/payment/[id]`
  ![image](https://github.com/lwfe/woovi-challenge-frontend/assets/60831308/2b3d7751-0605-491f-a03d-a67462a87bed)

- `/payment/[id]/card`
  ![image](https://github.com/lwfe/woovi-challenge-frontend/assets/60831308/caeb3fdd-906f-4caf-84dd-7502b0ff4225)

## Helper

Since I haven't implemented any backend service to make the PIX payment method works, I created this tooltip below to simulate a successful transaction:

![image](https://github.com/lwfe/woovi-challenge-frontend/assets/60831308/769e25a4-b64a-4866-bd01-b3c9f1401c6f)

This tooltip is only available in `/payment/[id]`, it redirects to the `/payment/[id]/card` to complete the payment, if applicable.

## Contact

If you are seeing this, thank you so much for you time :). If you have any further questions feel free to contact me at: leonardolwfe@gmail.com.
