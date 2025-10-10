// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
      // const extensionService = strapi.service("plugin::graphql.extension");
      // extensionService.use(({ strapi, nexus }) => ({
      //     typeDefs: `
      //   type Query {
      //     product(slug: String!): ProductEntityResponse
      //   }
      // `,
      //     resolvers: {
      //         Query: {
      //             strapi.eproduct: {
      //                 resolve: async (parent, args, context) => {
      //                     const { toEntityResponse } = strapi.service(
      //                         "plugin::graphql.format"
      //                     ).returnTypes;
      //
      //                     // const data = await strapi.services["api::article.article"].find({
      //                     //   filters: { slug: args.slug, locale: args.locale },
      //                     // });
      //
      //                     const data = await strapi.db.query("api::product.product").findMany({
      //                         where: { slug: args.slug },
      //                         populate: true
      //                     });
      //
      //                     // console.log("##################", data.results, "##################");
      //
      //
      //                     const response = toEntityResponse(data[0]);
      //                     // const response = toEntityResponse(data.results[0]);
      //
      //                     console.log("##################", response, "##################");
      //
      //                     return response;
      //                 },
      //             },
      //         },
      //     },
      // }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
