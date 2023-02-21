import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import Editor from './EditorWithUseQuill';

ReactDOM.render(
  <StrictMode>
    <Editor placeholder={'Write something...'} />
  </StrictMode>,
  document.getElementById('root')
);
