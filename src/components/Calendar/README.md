#### Example: Internationalization

```jsx inside Markdown
import {useState} from 'react'

const [date, setDate] = useState(null);


<div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
  <Calendar onChange={item => setDate(item)} date={date} />
</div>;
```
