---
sidebar_position: 3
---

# The 22 Worthy Features

- Selecting features can be varying and it may differ for different use cases
- for different attacks you may consider different features
- we get to know about these by improving our domain knowledge
- but for now these 22 features are worth looking for our usecase and our datasets

## Datasets Using:

- [IDS 2018 Intrusion CSVs (CSE-CIC-IDS2018) | Kaggle](https://www.kaggle.com/datasets/solarmainframe/ids-intrusion-csv)
- Machine Learning CSV

## So what are these features?

:::info

- **DST Port:** A destination port (Dst Port) refers to a specific number that is used to identify a service or application running on a particular network device.

- **Protocol:** A set of rules and procedures that govern the communication between two or more devices on a network. Exs:Transmission Control Protocol (TCP),User Datagram Protocol (UDP).

- **Flow Duration:**: Length of time that a particular data flow or communication session between two devices on a network lasts.

- **Total Forward Packets:** Metric used to measure the number of packets that are forwarded by a network device, such as a router or switch, in a given period of time.

- **Total Backward Packets:** Metric used to measure the number of packets that are sent in the opposite direction of data flow, compared to total forward packets.

- **Forward Packet Length Mean:** The mean packet length is calculated by taking the sum of the length of all packets forwarded during the period and dividing it by the total number of packets forwarded.

- **Backward Packet Length Mean:** The backward packet length mean is calculated by taking the sum of the length of all backward packets sent during a given period and dividing it by the total number of backward packets.

- **Flow IAT mean:** Flow IAT mean is a metric used in computer networking to measure the mean inter-arrival time (IAT) of data packets in a flow.The inter-arrival time refers to the time elapsed between the arrival of two consecutive packets in a flow.

- **Forward IAT mean:** Metric used to measure the mean inter-arrival time (IAT) of data packets in the forward direction of a flow.

- **Backward IAT mean:** Metric used to measure the mean inter-arrival time (IAT) of data packets in the backward direction of a flow.

- **Forward PSH(Push) Flags:** Metric that measures the number of TCP packets in the forward direction of a flow that have the PSH flag set.

  - The PSH (Push) flag is a TCP (Transmission Control Protocol) control flag used to indicate to the receiver that the data in the packet should be pushed up to the receiving application without waiting for a full buffer to be received.
  - When the PSH flag is set, the receiver should immediately deliver the data to the receiving application.

- **Backward PSH(Push) Flags:** Metric that measures the number of TCP packets in the backward direction of a flow that have the PSH flag set.

- **Forward URG(Urgent) Flags:** A metric that measures the number of TCP packets in the forward direction of a flow that have the URG flag set.

  - The URG (Urgent) flag is a TCP (Transmission Control Protocol) control flag used to indicate that the data in the packet contains urgent data that needs to be processed by the receiving application immediately.
  - When the URG flag is set, the receiver should process the urgent data before processing any other data in the packet.

- **Backward URG(Urgent) Flags:** A metric that measures the number of TCP packets in the backward direction of a flow that have the URG flag set.

- **Packet Length Mean:** A metric that represents the average length of packets in a network flow. The length of a packet is usually measured in bytes, and it includes both the header and the payload.

- **Forward header length:** A metric that represents the average length of the header of packets in the forward direction of a network flow.

  - The header of a packet contains information about the packet, such as the source and destination IP addresses, protocol type, and other relevant information that is used to route the packet through the network.

- **Backward header length:** A metric that represents the average length of the header of packets in the BACKward direction of a network flow.

- **INIT Forward mean bytes:** A metric that represents the average number of bytes transmitted in the forward direction of a TCP connection during the initial handshake phase.

- **INIT Backward mean bytes:** A metric that represents the average number of bytes transmitted in the backward direction of a TCP connection during the initial handshake phase.

- **Active mean:** Average number of active (i.e., currently running or executing) processes or connections on a system or network during a specified time period.
  Active mean is one of many metrics that can be used in cybersecurity to monitor system and network activity and identify potential threats.

- **Idle mean:** Average amount of time a system or network connection remains idle (i.e., no data is being transmitted) during a specified time period.

- **Label:** Output or target variable that a machine learning model is trying to predict based on input variables or features.

:::
