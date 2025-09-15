import { DefineRoutesFunction } from '@remix-run/dev/dist/config/routes';

export function setupRoutes(defineRoutes: DefineRoutesFunction) {
    return defineRoutes((route) => {
        //route("/", "routes/_index.tsx");
        //route("/", "routes/homepage.tsx");
        route("/:id", "routes/listing/index.tsx");
        route("/landing", "routes/landing/index.tsx");
        route("/web/search", "routes/web/search/index.tsx");
        route("/web/browse", "routes/web/browse/index.tsx");
        route("/web/browser", "routes/web/browse/browse.tsx");
        route("/web/signin", "routes/web/signin/index.tsx");
        route("/web/signup", "routes/web/signup/index.tsx");
        route("/web/reset_password", "routes/web/reset_password/index.tsx");
        route("/web/account", "routes/web/account/index.tsx");
        route("/web/account/profile", "routes/web/account/profile/index.tsx");
        route("/web/account/email_address", "routes/web/account/email_address/index.tsx");
        route("/web/account/change_password", "routes/web/account/change_password/index.tsx");
        route("/web/account/reset_password", "routes/web/account/reset_password/index.tsx");
        route("/web/account/deactivate_profile", "routes/web/account/deactivate_profile/index.tsx");
        route("/web/terms", "routes/web/terms/index.tsx");
        route("/web/privacy", "routes/web/privacy/index.tsx");
        route("/web/contact", "routes/web/contact/index.tsx");
        route("/web/db", "routes/web/browse/db.tsx")

        {/** account portfolio */ }
        route("/web/account/portfolio", "routes/web/account/portfolio/index.tsx");
        route("/web/account/portfolio/:business_guid", "routes/web/account/portfolio/business/index.tsx");
        route("/web/account/create_business", "routes/web/account/create_business/index.tsx");

        {/** portfolio business */ }
        route("/web/account/portfolio/:business_guid/:user_guid/settings", "routes/web/account/portfolio/business/settings/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/gallery", "routes/web/account/portfolio/business/gallery/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/products", "routes/web/account/portfolio/business/products/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/videos", "routes/web/account/portfolio/business/videos/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/facilities", "routes/web/account/portfolio/business/facilities/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/activate", "routes/web/account/portfolio/business/activate/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/social_media", "routes/web/account/portfolio/business/social_media/index.tsx");
        route("/web/account/portfolio/:business_guid/:user_guid/delete", "routes/web/account/portfolio/business/delete/index.tsx");


        {/** landing */ }
        route("/web/landing/change_email", "routes/web/landing/change_email/index.tsx")
        route("/web/landing/reset_password/:guid", "routes/web/landing/reset_password/index.tsx")
        route("/web/landing/complete_signup/:guid", "routes/web/landing/complete_signup/index.tsx")

        {/** user */ }
        route("api/user", "routes/api/user/index.tsx");
        route("api/user/signin", "routes/api/user/signin.tsx");
        route("api/user/verifytoken", "routes/api/user/verifytoken.tsx");
        route("api/user/:guid", "routes/api/user/user.tsx");
        route("api/user/change_password/:guid", "routes/api/user/change_password.tsx");
        route("api/user/reset_password_request", "routes/api/user/reset_password_request.tsx");
        route("api/user/reset_password/:guid", "routes/api/user/reset_password.tsx");
        route("api/user/activate_deactivate/:guid", "routes/api/user/activate_deactivate.tsx");
        route("api/user/user_profile_image/:guid", "routes/api/user/user_profile_image.tsx");
        route("api/user/user_profile_bg/:guid", "routes/api/user/user_profile_bg.tsx");
        route("api/user/change_email_request", "routes/api/user/change_email_request.tsx");
        route("api/user/change_email", "routes/api/user/change_email.tsx");
        route("api/user/verify_signup/:user_hash", "routes/api/user/verify_signup.tsx");


        route("api/listing", "routes/api/listing/index.tsx");
        route("api/listing/:guid_or_username", "routes/api/listing/listing.tsx");
        route("api/listing/search", "routes/api/listing/search.tsx");
        route("api/listing/searchlisting", "routes/api/listing/searchlisting.tsx");
        route("api/listing/featured_listing", "routes/api/listing/featured_listing.tsx");
        route("api/listing/business_facility_features/:business_guid", "routes/api/listing/business_facility_features.tsx");
        route("api/listing/listing_by_category/:category/:limit", "routes/api/listing/listing_by_category.tsx");
        route("api/listing/home_listing_by_category/:category/:limit", "routes/api/listing/home_listing_by_category.tsx")
        route("api/listing/home_latest_businesses/:limit", "routes/api/listing/home_latest_businesses.tsx")
        route("api/listing/business_gallery/:business_guid", "routes/api/listing/business_gallery.tsx");
        route("api/listing/business_profile_image/:guid", "routes/api/listing/business_profile_image.tsx");
        route("api/listing/business_profile_bg/:guid", "routes/api/listing/business_profile_bg.tsx");
        route("api/listing/owner", "routes/api/listing/owner/index.tsx");
        route("api/listing/delete_business/:business_guid", "routes/api/listing/delete_business.tsx");


        route("api/listing/operating_hours", "routes/api/listing/operating_hours.tsx");
        route("api/listing/gallery/:business_guid/:user_guid", "routes/api/listing/gallery.tsx");
        route("api/listing/sys_facility_features", "routes/api/listing/sys_facility_features/index.tsx");
        route("api/listing/selected_facility_features/:user_guid/:business_guid", "routes/api/listing/selected_facility_features/selected_facility_features.tsx");
        route("api/listing/selected_facility_features", "routes/api/listing/selected_facility_features/index.tsx");

        route("api/listing/sys_social_media", "routes/api/listing/sys_social_media/index.tsx");
        route("api/listing/selected_social_media/:user_guid/:business_guid", "routes/api/listing/selected_social_media/selected_social_media.tsx");
        route("api/listing/selected_social_media", "routes/api/listing/selected_social_media/index.tsx");

        route("api/listing/business_social_media/:business_guid", "routes/api/listing/business_social_media.tsx");

        route("api/listing/activate/:user_guid/:business_guid", "routes/api/listing/activate/activate.tsx");
        route("api/listing/recents", "routes/api/listing/recents.tsx");
        route("api/listing/save_video_link", "routes/api/listing/video_link.tsx")
        route("api/listing/video_links/:business_guid/:user_guid", "routes/api/listing/video_links.tsx")
        route("api/listing/video_links/:business_guid", "routes/api/listing/video_links_listing.tsx")

        route("api/listing/products/:business_guid/:user_guid", "routes/api/listing/products/index.tsx")

        route("api/rating", "routes/api/rating/index.tsx");
        route("api/rating/:user_guid/:business_guid", "routes/api/rating/rating.tsx");
        route("api/rating/business_ratings/:business_guid", "routes/api/rating/business_ratings.tsx");
        route("api/rating/ratings_reviews/:business_guid", "routes/api/rating/ratings_reviews.tsx");

        route("api/util/state", "routes/api/util/state.tsx");
        route("api/util/country", "routes/api/util/country.tsx");
        route("api/util/country_locale", "routes/api/util/country_locale.tsx");
        route("api/util/city", "routes/api/util/city.tsx");
        route("api/util/category", "routes/api/util/category.tsx");


        route("*", "routes/_404.tsx");
    });
}