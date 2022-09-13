import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

//-----------------------
//Journal-App 
//-----------------------


export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
