import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function FaqPanel() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq">
      <h1 className="faq-hero">Често Поставувани Прашања</h1>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Дали рециклирањето е најдобрата опција? Кои други опции постојат?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Најефективниот начин да се намали отпадот и најдобрата стратегија за зачувување на природата е да не се прави ѓубре воопшто. Редукција на изворот на ѓубрето, како и реискористувањето на материјалите се најфункционалните начини да се зачуваат природните ресурси, да се заштити околината и да се заштедат пари.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Како да ги дознаам моите локални опции за рециклирање</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Ве молиме контактирајте ја вашата локална општина или заедница за да ги дознаете вашите опции.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Зошто е важно да ставаме само предмети кои можат да се рециклираат во нашата отпадна корпа?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Ставање на предмети во отпадната корпа кои не можат да се рециклираат можат да го контаминираат редот на рецкилирање. Одкако овие предмети ќе пристигнат во рециклирачките центри, можат да направат штета на опремата, машините и слично. Истотака одкако ќе пристигнат, тие додатно мора да се сортираат и да се пратат на отпад - што дополнително ги зголемува оперативните трошоци на центарот. Затоа е важно да проверите што фрлате :)
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
Зошто некои работи кои изгледаат како да можат да се рециклираат - не се прифатени од рециклирачкиот центар?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Вашиот локален рециклирачки центар можеби нема да ги прима сите рециклирачки предмети. Ова е посебно точно со пластика. Додека пластичните шишиња се нај рециклираниот предмет, други пластики може да не бидат прифатени во вашиот центар, затоа информирајте се за тоа кој видови предмети ќе бидат прифатени.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
Што не смеам да ставам во мојата корпа за рециклирање?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
Никако не смеете да фрлате:
-Игли
-Гумени црева за домаќинство
-Боци за пропан (плин) / Празни алуминиумски боци
-Шприцеви, скршено стакло, сијалици
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Кои се најчести предмети кои можам да ги ставам во мојата корпа за рециклирање?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          -Картон/Хартија
-Кутии за храна
-Пошта
-Алуминиумски лименки
-Конзерви
-Стаклени шишиња
-Тегли
-Пластични шишиња и капачиња
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}