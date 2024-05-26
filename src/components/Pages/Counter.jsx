import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  )
}
