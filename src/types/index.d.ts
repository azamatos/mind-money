declare namespace App {


  declare namespace Auth {
    type Tab = "register" | "login";

    type RegisterForm = {
      email: string;
      referralCode: string;
      password: string;
      phoneNumber: string;
      privacyPolicy: boolean;
    };
  }
}
