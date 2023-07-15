import { ToolBars } from '../shared/components';
import { LayoutBaseDePagina } from '../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      title='Initial page'
      toolbars={<ToolBars showSearchInput newTextButton='New' />}>
      Probando
    </LayoutBaseDePagina>
  );
};
