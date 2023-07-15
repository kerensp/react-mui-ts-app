import { ToolBarsDetails } from '../shared/components';
import { LayoutBaseDePagina } from '../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina title='Initial page' toolbars={<ToolBarsDetails newTextButton={'New'} showSaveAndCloseButton />}>
      Probando
    </LayoutBaseDePagina>
  );
};
