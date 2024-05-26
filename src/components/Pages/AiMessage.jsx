import { Button } from "@/components/ui/button";
import { useState } from 'react';
import axios from 'axios';

export default function AiMessage() {
  const [aiResponse, SetAiResponse] = useState('');

  const getAi = () => {
    axios.get('/api/v1/chat/ai')
      .then((res) => {
        console.log('Response:', res);
        SetAiResponse(res.data);
      })
      .catch((err) => {
        console.log('Error:', err.toJSON());
      });
  }

  return (
    <div className="card">
      <Button onClick={() => getAi()}>Get AI</Button>
      <div>
        <textarea readOnly value={aiResponse} placeholder='Press for an AI story...'></textarea>
      </div>
    </div>
  )
}
