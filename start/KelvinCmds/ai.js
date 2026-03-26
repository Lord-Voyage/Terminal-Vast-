const axios = require("axios");
const fetch = require('node-fetch');

async function veniceAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: " *Voyage AI*\n\nFeel free to ask me anything!\n\nExample:\n.voyage Introduction to JavaScript\n.venice What is quantum computing?"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "𖠌*Voyage AI Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/ai/venice?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `𖠌 *Voyage AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('Venice AI Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to Voyage AI. Please try again." 
        }, { quoted: message });
    }
}

async function mistralAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: "🦅 *Mistral AI*\n\nPlease ask me something!\n\nExample:\n.mistral Explain machine learning\n.mistral Write a poem about nature"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "🤔 *Mistral AI Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/ai/mistral?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `🦅 *Mistral AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('Mistral AI Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to Mistral AI. Please try again." 
        }, { quoted: message });
    }
}

async function perplexityAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: "🔍 *Perplexity AI*\n\nPlease ask me something!\n\nExample:\n.perplexity Latest news about AI\n.perplexity How does photosynthesis work?"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "🤔 *Perplexity AI Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/ai/perplexity?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `🔍 *Perplexity AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('Perplexity AI Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to Perplexity AI. Please try again." 
        }, { quoted: message });
    }
}

async function bardAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: "🎭 *Google Bard AI*\n\nPlease ask me something!\n\nExample:\n.bard Tell me a joke\n.bard Explain blockchain technology"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "🤔 *Bard AI Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/ai/bard?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `🎭 *Google Bard AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('Bard AI Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to Google Bard AI. Please try again." 
        }, { quoted: message });
    }
}

async function gpt4NanoAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: "🧠 *GPT-4 Nano AI*\n\nPlease ask me something!\n\nExample:\n.gpt4nano Write a short story\n.gpt4nano Solve this math problem: 2x + 5 = 15"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "🤔 *GPT-4 Nano Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/ai/gpt41Nano?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `🧠 *GPT-4 Nano AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('GPT-4 Nano Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to GPT-4 Nano AI. Please try again." 
        }, { quoted: message });
    }
}

async function keithAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: "🤖 *Kelvin AI*\n\nPlease ask me something!\n\nExample:\n.keithai Hello, how are you?\n.kelvinai What can you do?"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "🤔 *Kelvin AI Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/keithai?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `🤖 *Kelvin AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('Kelvin AI Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to Keith AI. Please try again." 
        }, { quoted: message });
    }
}

async function claudeAICommand(conn, chatId, query, message) {
    try {
        if (!query) {
            return await conn.sendMessage(chatId, {
                text: "🤖 *Claude AI*\n\nPlease ask me something!\n\nExample:\n.claude Write an email template\n.claude Explain object-oriented programming"
            }, { quoted: message });
        }

        // Send thinking message - will NOT be deleted
        await conn.sendMessage(chatId, {
            text: "🤔 *Claude AI Thinking...*"
        }, { quoted: message });

        const apiUrl = `https://apiskeith.vercel.app/ai/claudeai?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { timeout: 30000 });
        
        if (!response.data?.status) {
            throw new Error('API returned no response');
        }

        const aiResponse = response.data.result;
        
        if (!aiResponse) {
            throw new Error('No AI response received');
        }

        const formattedResponse = `🤖 *Claude AI*\n\n${aiResponse}\n\n_🔍 Query: ${query}_`;

        await conn.sendMessage(chatId, {
            text: formattedResponse
        }, { quoted: message });

    } catch (error) {
        console.error('Claude AI Error:', error.message);
        await conn.sendMessage(chatId, { 
            text: "❌ Error connecting to Claude AI. Please try again." 
        }, { quoted: message });
    }
}

module.exports = { 
    veniceAICommand,
    mistralAICommand,
    perplexityAICommand,
    bardAICommand,
    gpt4NanoAICommand,
    keithAICommand,
    claudeAICommand
}