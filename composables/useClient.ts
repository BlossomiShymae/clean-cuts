import { Client } from "~/core/client";

const client = new Client();

export default function useClient(): { client: Client } {
  return { 
    client
  }
};