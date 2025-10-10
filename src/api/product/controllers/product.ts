/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.db.query("api::product.product").findOne({
            where: { slug },
            populate: true, // Опционально: для загрузки связанных данных
        });
        if (!entity) {
            return ctx.notFound("Page not found");
        }
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
}));
