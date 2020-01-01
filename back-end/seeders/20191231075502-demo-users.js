'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      user_profile: "https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/s960x960/44626053_2427035170670945_5802138162742427648_o.jpg?_nc_cat=111&_nc_eui2=AeEqpLI0Kj3DA9LzjMHF0vR0_0HzFyivrod_0CeYDiVyGCs26qO9Vr3FbrEGj9cC1loxgin5qZflwMT6TbI_tcw8E2Ts5rEqLHKMNCdZjo-rUg&_nc_ohc=xX-qV7C1JFIAQkgSYbtmcU9jAzCjkitYZeeS0SsAG8U0IiTOIbrRcVwIA&_nc_ht=scontent.fbkk8-3.fna&oh=58c5b98eefdd81cbe707c41af94a403d&oe=5E6A8DFE",
      username: "bell",
      full_name: "chutinun tantasathiar",
      password: "bell",
      birth: "11-25-1994",
      role: "user",
    },
    {
      user_profile: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/p960x960/70707286_10215740226120120_3548748609862238208_o.jpg?_nc_cat=107&_nc_eui2=AeEQ3XaW6zIyjDCWZ0w1xF42SkRaUQoS-bvY02cAxxPwwT3pFUTcd-LyChNQixpM2i3Qv6ASStbg0mg07J8WRv3UHQEvPEmy3-cJMHIqDR-f7w&_nc_ohc=DRS_5ku0twoAQmbwZjpJgwq-70JZ7URkSq8vNLJziPjlH4AEr-eKuYCbQ&_nc_ht=scontent.fbkk8-2.fna&oh=18a9abd615950543d44741cd7c67ffdb&oe=5E9B936C",
      username: "ki",
      full_name: "napas kavalee",
      password: "apple",
      birth: "11-28-1994",
      role: "user",
    },
    {
      user_profile: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/p960x960/73236401_3321998971174556_7375475311372140544_o.jpg?_nc_cat=110&_nc_eui2=AeGIPyZaSD1Sw6PkaEgARfdRSjtik4tFNYlezxcMskDTvOACqqYnBF6D1N4DBSxoW0R2GSGpQp5klzcPzaON4t4HECirBR7HzOaW_XUhu3Orgg&_nc_ohc=tNTsHz5C5egAQmZDRV6enOem3RKcb83pqaB5f5JMimREM4PDXfq0f2gRw&_nc_ht=scontent.fbkk12-1.fna&oh=e2dfed85a13d508512f7411e4f787bfe&oe=5E65ED9F",
      username: "belltin",
      full_name: "chutinun tantasathiar",
      password: "bell",
      birth: "25-11-1994",
      role: "admin",
    }
    ],
      {});
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
