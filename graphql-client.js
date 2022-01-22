import { select } from './elements.js';
import { onSelectChange } from './handlers/onSelectChange.js';
import { initSelect } from './util/initSelect.js';

initSelect();
select.addEventListener('change', onSelectChange);
