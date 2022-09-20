import { Response, Request } from "express";
import { Codes, User } from "../models/models";

class AuthController {
  async gitHubAuth(req: Request, res: Response) {
    try {
      const callbackScript = `
      <script>
        window.opener.postMessage(${JSON.stringify(
          req.user
        )}, 'http://localhost:3000');
        window.close()
      </script>
    `;

      res.send(callbackScript);
    } catch (e) {}
  }

  async sendCallCode(req: Request, res: Response) {
    try {
      const phone = req.body.phone;
      const UserId = req.user.id;

      console.log(req.user.id);

      const recipient = await User.findByPk(UserId);

      if (!phone || !UserId || !recipient) {
        return res.status(400).send();
      }

      // const { data } = await axios.get<{
      //   status: string;
      //   code: string;
      //   call_id: string;
      //   cost: number;
      //   balance: number;
      // }>(
      //   `https://sms.ru/code/call?phone=${phone}&ip=33.22.11.55&api_id=${process.env.SMS_SECRET_CODE}`
      // );

      // await Codes.create({
      //   userId,
      //   code: Number(data.code),
      //   type: "authCode",
      // });

      await Codes.create({
        UserId,
        code: Number(1235),
        type: "authCode",
      });

      return res.status(200).json({
        message: "Code sent",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Error, unable to make a call",
      });
    }
  }
  async checkCallCode(req: Request, res: Response) {
    try {
      const code = Number(req.query.code);
      const UserId = req.user.id;

      if (!code || !UserId)
        return res.status(400).send({ message: "validation failed" });

      const result = await Codes.findOne({
        where: {
          UserId,
        },
      });

      if (!result)
        return res.status(500).send({ message: "User code not found" });

      if (result.code !== code)
        return res.status(400).send({ message: "Incorrect code" });

      if (result.code === code) {
        await User.update(
          { isActive: true },
          {
            where: {
              id: UserId,
            },
          }
        );
        await Codes.destroy({ where: { UserId, code } });
        return res.json({ message: "ok" });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async getMe(req: Request, res: Response) {
    return res.json(req.user);
  }
}

export default new AuthController();
