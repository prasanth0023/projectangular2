import { ProjectangularPage } from './app.po';

describe('projectangular App', function() {
  let page: ProjectangularPage;

  beforeEach(() => {
    page = new ProjectangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
