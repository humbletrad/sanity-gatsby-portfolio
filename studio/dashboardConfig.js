export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6136eca6512f0f0757178751',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-agfx3suo',
                  apiId: 'be9cdb41-85fb-4154-8c63-b8a1402007e2'
                },
                {
                  buildHookId: '6136eca6354b430432c4f0fe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t4h2bba9',
                  apiId: 'db91fee4-c9df-4387-85c2-e987e568f5ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/humbletrad/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t4h2bba9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
