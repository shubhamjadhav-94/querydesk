# QueryDesk – AI-Powered Customer Support Platform

An AI-powered customer support platform that enables businesses to automate customer interactions using a customizable, website-embeddable chatbot.

QueryDesk allows businesses to configure their own chatbot by providing business information and a custom knowledge base. Powered by Google Gemini AI, the platform generates context-aware responses to customer queries and makes AI-powered support easier to integrate into existing websites.

Built using Next.js, TypeScript, MongoDB, Google Gemini AI, and Scalekit Authentication.

---

## 1. What is QueryDesk?

QueryDesk is a full-stack AI-powered customer support solution designed to help businesses manage repetitive customer inquiries more efficiently.

Businesses can configure their chatbot through a centralized dashboard without building an AI integration from scratch.

The platform connects business-specific information with Google's Gemini AI model to generate relevant responses based on the configured knowledge base.

### The Problem

- Businesses receive repetitive customer inquiries.
- Customers expect quick responses to common questions.
- Managing every support interaction manually can be time-consuming.
- Integrating AI-powered support into a website can require additional development effort.

### The Solution

QueryDesk provides a configurable AI chatbot that businesses can personalize with their own information and embed into their websites using a JavaScript integration snippet.

## 2. Key Features

### AI-Powered Customer Support
- Google Gemini AI integration.
- Context-aware responses using business-specific information.
- Knowledge-based question answering.
- Fallback responses when a question cannot be answered using the available information.

### Authentication & User Access
- Scalekit authentication integration.
- Login and logout functionality.
- Authentication callback handling.
- Session-based user access.

### Business Dashboard
- Personalized business configuration.
- Business name and support email management.
- Custom knowledge-base configuration.
- MongoDB-based settings persistence.

### Embeddable Chatbot Widget
- JavaScript-based chatbot integration.
- Business-specific chatbot identification using an owner ID.
- Floating chatbot interface.
- Expandable and collapsible chat window.
- Customer message and AI response display.
- Copy-to-clipboard embed code functionality.

### Modern User Interface
- Responsive Next.js application.
- Reusable React components.
- Animated UI interactions using Motion.
- Clean and minimal interface.

## 3. How QueryDesk Works

The application follows a straightforward business-to-chatbot workflow.

1. **Authentication:** Business owners sign in through Scalekit authentication.
2. **Dashboard:** Authenticated users access their business dashboard.
3. **Configuration:** Users provide their business name, support email, and knowledge-base information.
4. **Data Storage:** Business settings are saved in MongoDB using Mongoose.
5. **Embed Generation:** QueryDesk generates a JavaScript integration snippet containing the business-specific owner ID.
6. **Website Integration:** The business owner adds the generated script to their website.
7. **Customer Interaction:** Website visitors open the chatbot and submit their questions.
8. **AI Processing:** The chat API retrieves the corresponding business settings and constructs a context-specific prompt.
9. **Response Generation:** Google Gemini AI generates a response using the available business information.
10. **Customer Response:** The chatbot displays the generated answer to the visitor.

## 4. System Architecture

QueryDesk uses a modular full-stack architecture that connects the frontend, authentication service, database, AI service, and embeddable chatbot.

### Architecture Overview

```text
                 BUSINESS OWNER
                       |
                       v
                QUERYDESK WEB APP
                       |
                       v
              SCALEKIT AUTHENTICATION
                       |
                       v
                 USER DASHBOARD
                       |
                       v
              BUSINESS CONFIGURATION
                       |
                       v
                  MONGODB
                       |
                       v
               EMBED CODE GENERATION
                       |
                       v
             EXTERNAL BUSINESS WEBSITE
                       |
                       v
                CHATBOT WIDGET
                       |
                       v
                   CHAT API
                       |
                +------+------+
                |             |
                v             v
             MONGODB      GEMINI AI
                |             |
                +------+------+
                       |
                       v
                AI-GENERATED ANSWER
                       |
                       v
                CHATBOT RESPONSE
```

## 5. Technology Stack

| Category | Technologies |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes, Node.js |
| Database | MongoDB, Mongoose |
| Authentication | Scalekit Node SDK |
| AI Integration | Google Gemini API |
| HTTP Client | Axios |
| Animations | Motion |
| Icons | React Icons |
| Version Control | Git, GitHub |

## 6. Project Structure

```text
querydesk/
│
├── public/
│   └── chatBot.js
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── callback/
│   │   │   ├── login/
│   │   │   └── logout/
│   │   │
│   │   │   ├── chat/
│   │   │   └── settings/
│   │   │       ├── get/
│   │   │       └── route.ts
│   │   │
│   │   ├── dashboard/
│   │   ├── embed/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── DashboardClient.tsx
│   │   ├── EmbedClient.tsx
│   │   ├── FAQSection.tsx
│   │   ├── HomeClient.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── lib/
│   │   ├── db.ts
│   │   ├── getSession.ts
│   │   └── scalekit.ts
│   │
│   ├── model/
│   │   └── settings.model.ts
│   │
│   ├── types.d.ts
│   └── proxy.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 7. Installation & Setup

Follow these steps to run QueryDesk locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm
- MongoDB database
- Google Gemini API key
- Scalekit developer account

### Step 1: Clone the repository

```bash
git clone https://github.com/shubhamjadhav-94/querydesk.git
```

### Step 2: Navigate to the project

```bash
cd querydesk
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Configure environment variables

Create a `.env.local` file in the root directory.

Add the following configuration:

```env
# Scalekit Authentication
SCALEKIT_ENVIRONMENT_URL=your_scalekit_environment_url
SCALEKIT_CLIENT_ID=your_scalekit_client_id
SCALEKIT_CLIENT_SECRET=your_scalekit_client_secret

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# MongoDB
# Add the database variable used by src/lib/db.ts
```

Replace the placeholder values with your actual credentials.

**Security:** Never commit `.env.local`, API keys, database credentials, or authentication secrets to GitHub.

### Step 5: Start the development server

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

## 8. Authentication Flow

QueryDesk integrates Scalekit for handling user authentication.

The authentication workflow:

1. User initiates login.
2. Application redirects to the authentication endpoint.
3. Scalekit handles the authentication process.
4. The authentication callback processes the response.
5. The application establishes the user session.
6. Authenticated users can access the dashboard.
7. Users can log out through the logout endpoint.

## 9. AI Chatbot & Knowledge Base

QueryDesk integrates Google's Gemini AI to generate customer support responses.

### How AI Response Generation Works

1. Customer submits a message through the chatbot.
2. The chatbot sends the message and business owner ID to the chat API.
3. The API validates the required input.
4. MongoDB retrieves the corresponding business configuration.
5. The application constructs a prompt containing the business name, support email, and knowledge-base content.
6. Google Gemini AI processes the prompt.
7. The generated response is returned to the chatbot.

### Context-Aware Response Generation

The AI prompt instructs Gemini to:

- Act as a professional customer support assistant.
- Use only the supplied business information.
- Avoid inventing prices, policies, or promises.
- Provide a fallback response when the available information cannot answer the question.

This approach helps keep chatbot responses aligned with the business's configured knowledge base.

## 10. Website Chatbot Integration

QueryDesk provides a JavaScript-based chatbot widget that can be integrated into external websites.

### Example Integration

```html
<script
  src="https://your-querydesk-domain.com/chatBot.js"
  data-owner-id="YOUR_BUSINESS_OWNER_ID">
</script>
```

### Integration Steps

1. Sign in to QueryDesk.
2. Configure your business information.
3. Navigate to the Embed section.
4. Copy the generated embed snippet.
5. Add the script to your website's HTML.
6. Ensure the configured API endpoint points to your deployed QueryDesk application.
7. Test the chatbot by submitting a customer query.

The owner ID allows the chat API to retrieve the relevant business configuration.

## 11. API Endpoints

The application uses Next.js API routes to handle authentication, chatbot interactions, and business configuration.

| Endpoint | Method | Description |
|---|---|---|
| `/api/auth/login` | GET | Initiates user authentication |
| `/api/auth/callback` | GET | Processes authentication callback |
| `/api/auth/logout` | GET | Handles user logout |
| `/api/chat` | POST | Processes customer messages and generates AI responses |
| `/api/chat` | OPTIONS | Handles CORS preflight requests |
| `/api/settings` | POST | Saves business configuration |
| `/api/settings/get` | GET | Retrieves business configuration |

## 12. Database Management

QueryDesk uses MongoDB with Mongoose for persistent business configuration storage.

The settings model manages information such as:

- Business name
- Support email
- Knowledge-base content
- Business owner identification

The database connection is managed through a reusable helper in `src/lib/db.ts`.

## 13. Environment Variables & Security

QueryDesk uses environment variables to manage sensitive application configuration.

Important security considerations:

- Keep API keys and authentication credentials outside source code.
- Exclude `.env.local` and other secret files from version control.
- Never expose server-side credentials through public frontend variables.
- Validate API request inputs.
- Protect business configuration and user sessions.
- Configure appropriate CORS policies for production.
- Consider API rate limiting and abuse prevention.

## 14. Future Enhancements

Potential improvements planned for QueryDesk:

- Chat conversation history.
- Multiple chatbot management.
- Advanced chatbot customization.
- Customer interaction analytics.
- Improved knowledge-base management.
- Chatbot theme customization.
- Enhanced API security and rate limiting.
- Production deployment and monitoring.

## 15. Learning Outcomes

This project demonstrates practical implementation of:

- Full-stack development with Next.js and TypeScript.
- Third-party authentication integration.
- Generative AI API integration.
- REST API development.
- MongoDB database integration.
- Business-specific AI prompt engineering.
- JavaScript-based embeddable widgets.
- Environment variable management.
- Git and GitHub version control.

## 16. Author

**Shubham Jadhav**

Full-Stack Developer | MERN Stack & AI-Powered Applications

GitHub: [shubhamjadhav-94](https://github.com/shubhamjadhav-94)

Repository: [QueryDesk](https://github.com/shubhamjadhav-94/querydesk)

---

If you find QueryDesk interesting, feel free to explore the repository and follow its development.

⭐ Star the repository if you like the project!