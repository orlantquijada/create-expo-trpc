import os from "os"

/**
 * Gets the IP address of your host-machine.
 * NOTE: this is only a helper function for development.
 */
export function getHostIP() {
  const interfaces = os.networkInterfaces()
  const ipv4Interface = Object.values(interfaces).find((intf) =>
    intf?.some(
      (e) =>
        e.family === "IPv4" && !e.internal && e.address.startsWith("192.168."),
    ),
  )

  return ipv4Interface?.[0]?.address ?? ""
}
