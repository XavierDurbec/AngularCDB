import {Computer} from '../model/computer';
import {COMPANIES} from '../company/mockCompany';


export const COMPUTERS: Computer[] = [
  {id: 2, name: 'MAC PRO II', introduced: '2014-05-01', discontinued: '', company: COMPANIES[0]},
  {id: 4, name: 'ULTRABOOK ASUS I', introduced: '2000-10-11', discontinued: '', company: COMPANIES[1]},
  {id: 0, name: 'MAC PRO II', introduced: '1980-05-01', discontinued: '2010-08-20', company: null}
];
