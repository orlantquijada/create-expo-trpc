import os from "os"

/**
 * Gets the IP address of your host-machine.
 * NOTE: this is only a helper function for development.
 */
export function getHostIP() {
  const interfaces = os.networkInterfaces()
  const ipv4Interface = Object.values(interfaces)
    .flat()
    .find(
      (intf) =>
        intf?.family === "IPv4" &&
        !intf.internal &&
        intf.address.startsWith("192.168"),
    )

  return ipv4Interface?.address ?? ""
}
