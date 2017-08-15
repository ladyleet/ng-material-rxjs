import { NgMaterialRxjsPage } from './app.po';

describe('ng-material-rxjs App', () => {
  let page: NgMaterialRxjsPage;

  beforeEach(() => {
    page = new NgMaterialRxjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
